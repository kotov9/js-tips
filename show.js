const {
    ObjWithPrivacy, ObjWithPrivacyC
} = require("./tricks");

const SHOW_OBJ_WITH_PRIVACY = 0;
const SHOW_OBJ_WITH_PRIVACY_C = 1;

if (SHOW_OBJ_WITH_PRIVACY)
{
    console.log('SHOW_OBJ_WITH_PRIVACY')
    const owp = new ObjWithPrivacy("987i", "Nikita", 999);
    console.log(owp);
    console.log(`id = ${owp.getId()}`);
    console.log(`privateId ? = ${owp.privateId}`);
    console.log(`secret privateId (wrong code) = ${owp.getPrivateId(111)}`);
    console.log(`secret privateId (correct code) = ${owp.getPrivateId(999)}`);
    console.log(`priority = ${owp.getPriority()}`);
    console.log(`priority (set to 10) = : ${owp.setPriority(10)}`);
    console.log(`priority (increase) = : ${owp.increasePriority()}`);
    console.log(`priority (decrease) = : ${owp.decreasePriority()}`);
    console.log('\n\n')
}

if (SHOW_OBJ_WITH_PRIVACY_C)
{
    console.log('SHOW_OBJ_WITH_PRIVACY_C')
    const owp = new ObjWithPrivacyC("987i", "Nikita", 999);
    console.log(owp);
    console.log(`id = ${owp.getId()}`);
    console.log(`privateId ? = ${owp.privateId}`);
    console.log(`secret privateId (wrong code) = ${owp.getPrivateId(111)}`);
    console.log(`secret privateId (correct code) = ${owp.getPrivateId(999)}`);
    console.log(`priority = ${owp.getPriority()}`);
    console.log(`priority (set to 10) = : ${owp.setPriority(10)}`);
    console.log(`priority (increase) = : ${owp.increasePriority()}`);
    console.log(`priority (decrease) = : ${owp.decreasePriority()}`);
    console.log('\n\n')
}