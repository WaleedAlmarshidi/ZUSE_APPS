odoo.define('pos_custom_buttons.DemoButton', function (require) {
   'use strict';
   const PosComponent = require('point_of_sale.PosComponent');
   const ProductScreen = require('point_of_sale.ProductScreen');
   const { useListener } = require("@web/core/utils/hooks");
   const Registries = require('point_of_sale.Registries');
   class SendKitchen extends PosComponent {
      // setup() {
      //    // super(...arguments);
      //    super.setup();
      //    useListener("click-send-kitchen", this.onClickSendKitchen);
      // }
      is_available() {
         return this.env.pos.get_order();
      }
      onClickSendKitchen() {
         var order = this.is_available();
         var self = this
         this.env.pos.push_orders(order, {'draft': true}).then(
            function (result) {
               self.rpc({
                  model: 'pos.order',
                  method: 'send_to_kitchen',
                  args: [false],
                  kwargs: {'order_name': order.name},
               });
               return result;
         });
      }
   }
   SendKitchen.template = 'SendToKitchen';
   ProductScreen.addControlButton({
      component: SendKitchen,
      condition: function () {
         return this.env.pos;
      },
   });
   Registries.Component.add(SendKitchen);
   return SendKitchen;
});