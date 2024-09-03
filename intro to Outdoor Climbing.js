function introToOutdoorClimbing() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();

let cell = setupCell("Dashboard","B34")
let sheet = setupSheet("Intro To Outdoor Climbing")
 
 var results = stmt.executeQuery('select distinct db.nickname "FB Name", db.scores_volunteer_score_cached "Rcptvnss",db.stats_volunteer_for_numerator_cached "voluntred",(CAST(db.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(db.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER) + CAST(db.`stats_attendance_training_attended_cached` AS UNSIGNED INTEGER))"attndd outdoors", `skills-belaying` "Belaying Skills", `skills-trad-climbing` "Trad Skills", `skills-sport-climbing` "Sport Skills",`cc_compliance_last_date_of_climbing`"Last Climbed",  `climbing-indoors-toproping-grades` "Indoor TR", `climbing-indoors-leading-grades` "Indoor Lead",db.cc_member "Member?",`climbing-sport-grades` "Sport Lead",`climbing-trad-grades` "Lead Trad"  from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id JOIN wp_member_db_scores s on s.user_id = db.id where (cc_member<>"expired" OR cc_member IS NULL) AND  `skills-belaying` not like "%No%" AND  (`skills-trad-climbing` not in ("lead trad", "learning trad","seconding") OR `skills-trad-climbing` IS NULL) AND  (`skills-sport-climbing` not in ("Lead Outdoors", "Lead and strip","Lead Outdoors and Strip Routes") OR `skills-sport-climbing` IS NULL ) AND CAST(`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) >= 2 AND CAST(`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) <= 3 AND  CAST(`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER) <= 3 AND cc_compliance_last_date_of_climbing >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)  order by CAST(`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC, `skills-belaying` DESC, `skills-trad-climbing` ASC,`climbing-happy-to-supervise` DESC LIMIT 50' );
appendToSheet(sheet, results);

results.close();
stmt.close();
} 