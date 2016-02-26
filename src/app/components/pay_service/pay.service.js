(function() {
  'use strict';

  angular
  .module('pay')
  .service('pay_service', pay_service);

/** @ngInject */
function pay_service() {
  var data = [{
    'id': '1',
'state': 'init'
  },
{
  'id': '2',
'state': 'check'
},
{
  'id': '3',
'state': 'check'
},
{
  'id': '4',
  'state': 'check'
},
{
  'id': '5',
  'state': '经办'
},
{
  'id': '2',
  'state': 'check'
},
{
  'id': '3',
  'state': 'check'
},
{
  'id': '4',
  'state': 'check'
},
{
  'id': '5',
  'state': '经办'
}
];

this.getTodo = getTodo;
function getTodo() {
  return data;
}
}

})();
