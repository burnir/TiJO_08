var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    function clearAndType(webElement, text)
    {
        text = text.replace(/\\n/g, protractor.Key.ENTER);
        return webElement.getAttribute('type').then(function (type)
        {
            if ('date' !== type) {
                return webElement.clear().then(function ()
                {
                    return webElement.sendKeys(text);
                });
            } else {
                return webElement.sendKeys(text);
            }
        });
    }

    this.When(/^I enter "(.*)" into "(.*)" field$/, function (text, name, callback)
    {
        var webElement = fragments(name)();
        clearAndType(webElement, text).then(callback);
    });

    this.Then(/^the css element "([^"]*)" should contain the text "(.*)"$/, function (cssClass, text, callback)
    {

        expect(element(by.css(cssClass)).getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)" column in row "(\d+)" of "([^"]*)" table$/, function (expectedText, columnName, row, table, callback)
    {
        row = parseInt(row, 10);
        var rowElement = fragments(table)().element(by.css('tbody tr:nth-of-type(' + row + ')'));
        table = table.split('.');
        table.pop();
        table.push(columnName);
        var columnElement = fragments(table.join('.'))();
        expect(rowElement.element(columnElement.locator()).getText()).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.Then(/^pause$/, function (callback)
    {
        browser.pause();
        callback();
    });


};
