// Copyright (c) 2022, Surebiz Corporation | IT Department and contributors
// For license information, please see license.txt

frappe.ui.form.on('Procurement Request', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on("Procurement Request Item", {
	unit_quantity: function(frm,cdt, cdn){
		unit_subtotal(frm, cdt, cdn);
	},
	unit_cost: function(frm, cdt, cdn){
		unit_subtotal(frm, cdt, cdn);
	}
});

var unit_subtotal = function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
    frappe.model.set_value(cdt, cdn, 'unit_subtotal', (d.unit_quantity * d.unit_cost));
};

frappe.ui.form.on('Procurement Request Item',{
    unit_quantity: function(frm, cdt, cdn){
		var d = locals[cdt][cdn];
		var total = 0;
		frm.doc.items.forEach(function (d) {total += d.unit_subtotal;});
		cur_frm.set_value('calculated_cost_total', total);
		//refresh_field('calculated_cost_total');
	},
	unit_cost : function(frm, cdt, cdn){
		var d = locals[cdt][cdn];
		var total = 0;
		frm.doc.items.forEach(function (d) { total += d.unit_subtotal; });
		cur_frm.set_value('calculated_cost_total', total);
		//refresh_field('calculated_cost_total');
	}
});