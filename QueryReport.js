function eventTraining() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


let cell = setupCell("Dashboard","B34")
let sheet = setupSheet("Event Skills")


 var results = stmt.executeQuery('select distinct `first_name`,`nickname` fbname, `climbing-discipline-preference` "t or s", `skills_belaying_top_rope` AS "TR Bly",skills_belaying_lead "Lead Bly",skills_trad_leading "Lead Trad",skills_sport_leading_outside "Sport Lead Outside",skills_sport_stripping "Sport Strip",skills_trad_seconding "Second Trad", skills_trad_toprope "Trad Toprope",`skills_belaying_lead_needs_supervision` "lead belay sup?",skills_trad_leading_needs_supervision "Trad lead with sup",skills_trad_seconding_needs_supervision "seconding with sup",skills_belaying_halfropes "twin belay", skills_trad_abseiling "Abseil", skills_trad_prussiking "Prusik",skills_trad_belay_escape "Trad Escape",skills_trad_retrievable_abseils "Abseil Rigging (retr)",skills_trad_big_wall "big wall",skills_trad_hauling "hauling",skills_trad_moving_together "moving together", skills_sport_seconding_outside "Sport Second",skills_sport_seconding_inside "Sport Second Inside", skills_sport_leading_inside "Sport Lead Inside",`skills-trad-climbing` "Trad Skills", `skills-sport-climbing` "Sport Skills", `climbing-trad-skills-extra` "Trad Climbing Skills", `climbing-sport-skills-extra` "Sport Climbing Skills", `gear-bringing-evening-or-day-trip` "climbing Gear",`gear-walking-equipment-weekend` "walking gear",`gear-quickdraws-number` "QD number",`climbing-trad-skills-passing-on` "Trad Skills to pass on", `climbing-sport-skills-passing-on` "Sport Skills to pass on", `climbing-indoors-skills-passing-on` "Indoor Skills to pass on", `scores_volunteer_value_cached` "total volunteering", `climbing-happy-to-supervise` "super"   from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id JOIN wp_member_db_skills sk on pd.user_id = sk.id where product_id='+ cell +' AND status="wc-processing" AND cc_attendance="pending" order by `scores_volunteer_value_cached`');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 