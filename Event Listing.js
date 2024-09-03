function readEvents() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


let cell = setupCell("Dashboard","B34")
let sheet = setupSheet("Event List")

 var results = stmt.executeQuery('select distinct order_item_name, product_id from wp_order_product_customer_lookup where cc_attendance="pending" AND status="wc-processing" order by product_id desc');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 
