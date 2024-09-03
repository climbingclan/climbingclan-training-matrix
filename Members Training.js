function memberTraingData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();


let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Training-Members-Only")
 
 var results = stmt.executeQuery('select distinct `nickname` "fbname", b.stats_volunteer_for_numerator_cached "volunteered",b.stats_volunteer_for_denominator_cached "attended",FLOOR(b.scores_volunteer_score_cached) "Recptvnss",skills_belaying_top_rope "TR Belay",skills_belaying_lead "Lead Bly",skills_sport_leading_outside "Lead Sport",skills_trad_leading "Lead Trad",skills_trad_multipitch_anchors "Multipitch Trad", cc_compliance_last_date_of_climbing "Last attended climbing",b.`committee_current` "Committee",   b.id "user ID"  from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id JOIN wp_member_db_scores s on s.user_id = db.id where `cc_member`="yes" order by CAST(`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC, `skills-belaying` DESC, `skills-trad-climbing` ASC,`climbing-happy-to-supervise` DESC');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 