var server = '18.168.242.164';
var port = 3306;
var dbName = 'bitnami_wordpress';
var username = 'gsheets';
var password = 'eyai4yohF4uX8eeP7phoob';
var url = 'jdbc:mysql://'+server+':'+port+'/'+dbName;

function readTrainingData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();


let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Training-All-Community")
 
 var results = stmt.executeQuery('select distinct `first_name` "first name",b.stats_volunteer_for_numerator_cached "volunteered",b.stats_volunteer_for_denominator_cached "attended",FLOOR(b.scores_volunteer_score_cached) "Recptvnss",skills_belaying_top_rope "TR Belay",skills_belaying_lead "Lead Bly",skills_sport_leading_outside "Lead Sport",skills_trad_leading "Lead Trad",skills_trad_multipitch_anchors "Multipitch Trad", cc_compliance_last_date_of_climbing "Last attended climbing",b.`committee_current` "Committee",   b.id "user ID" from  wp_member_db b JOIN wp_member_db_skills skills on b.id = skills.id JOIN wp_member_db_skillshare sk on b.id = sk.id where stats_attendance_signups_cached>=0 order by CAST(`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC, `skills-belaying` DESC, `skills-trad-climbing` ASC,`climbing-happy-to-supervise` DESC LIMIT 300');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 