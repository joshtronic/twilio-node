'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Mobile', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'incoming_phone_numbers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_requirements': 'none',
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'beta': null,
                  'capabilities': {
                      'mms': false,
                      'sms': true,
                      'voice': false
                  },
                  'date_created': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'date_updated': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'friendly_name': '61429099450',
                  'identity_sid': 'RIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'phone_number': '+61429099450',
                  'origin': 'origin',
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_application_sid': '',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_method': 'POST',
                  'sms_url': '',
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'trunk_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_application_sid': '',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null,
                  'emergency_status': 'Active',
                  'emergency_address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'bundle_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .incomingPhoneNumbers
                      .mobile.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'incoming_phone_numbers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_requirements': 'none',
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'beta': null,
                  'capabilities': {
                      'mms': false,
                      'sms': true,
                      'voice': false
                  },
                  'date_created': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'date_updated': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'friendly_name': '61429099450',
                  'identity_sid': 'RIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'phone_number': '+61429099450',
                  'origin': 'origin',
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_application_sid': '',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_method': 'POST',
                  'sms_url': '',
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'trunk_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_application_sid': '',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null,
                  'emergency_status': 'Active',
                  'emergency_address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'bundle_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .incomingPhoneNumbers
                      .mobile.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/IncomingPhoneNumbers/Mobile.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'incoming_phone_numbers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_requirements': 'none',
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'beta': null,
                  'capabilities': {
                      'mms': false,
                      'sms': true,
                      'voice': false
                  },
                  'date_created': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'date_updated': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'friendly_name': '61429099450',
                  'identity_sid': 'RIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'phone_number': '+61429099450',
                  'origin': 'origin',
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_application_sid': '',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_method': 'POST',
                  'sms_url': '',
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'trunk_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_application_sid': '',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null,
                  'emergency_status': 'Active',
                  'emergency_address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'bundle_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .incomingPhoneNumbers
                      .mobile.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .incomingPhoneNumbers
                                    .mobile.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/IncomingPhoneNumbers/Mobile.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'incoming_phone_numbers': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address_requirements': 'none',
                  'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'beta': null,
                  'capabilities': {
                      'mms': false,
                      'sms': true,
                      'voice': false
                  },
                  'date_created': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'date_updated': 'Tue, 08 Sep 2015 16:21:16 +0000',
                  'friendly_name': '61429099450',
                  'identity_sid': 'RIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'phone_number': '+61429099450',
                  'origin': 'origin',
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_application_sid': '',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_method': 'POST',
                  'sms_url': '',
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'trunk_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_application_sid': '',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null,
                  'emergency_status': 'Active',
                  'emergency_address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'bundle_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .incomingPhoneNumbers
                                    .mobile.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'incoming_phone_numbers': [],
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/Mobile.json'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .incomingPhoneNumbers
                                    .mobile.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {phoneNumber: '+15017122661'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .incomingPhoneNumbers
                                    .mobile.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/IncomingPhoneNumbers/Mobile.json`;

      var values = {PhoneNumber: '+15017122661', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address_requirements': 'none',
          'address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'beta': false,
          'capabilities': {
              'mms': true,
              'sms': false,
              'voice': true
          },
          'date_created': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'date_updated': 'Thu, 30 Jul 2015 23:19:04 +0000',
          'identity_sid': 'RIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': '(808) 925-5327',
          'phone_number': '+18089255327',
          'origin': 'origin',
          'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_application_sid': '',
          'sms_fallback_method': 'POST',
          'sms_fallback_url': '',
          'sms_method': 'POST',
          'sms_url': '',
          'status_callback': '',
          'status_callback_method': 'POST',
          'trunk_sid': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_application_sid': '',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_url': null,
          'emergency_status': 'Active',
          'emergency_address_sid': 'ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'bundle_sid': 'BUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {phoneNumber: '+15017122661'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .incomingPhoneNumbers
                                    .mobile.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
