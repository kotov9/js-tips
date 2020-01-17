/* ========================================================================== */
/*                Useful and interestings js tricks and tips                  */
/* ========================================================================== */
/* -------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
|------------   Making object with private properties -------------------------|
----------------------------------------------------------------------------- */

// Function-based approach
const ObjWithPrivacy = function(id, name, secretCode) {
    // Private properties and methods are define here
    const publicId = id;
    let objPriority = 0;
    
    // Public properties and methods are defined here
    const Obj = function(name) {
        this.name = name;
        this.getId = () => publicId;
        this.getPrivateId = (code) => code === secretCode ? publicId + name : "********";
        this.setPriority = (priority) => (objPriority = priority);
        this.getPriority = () => (objPriority);
        this.increasePriority = () => ++objPriority;
        this.decreasePriority = () => --objPriority;
    }
    return new Obj(name);
}

// Class-based approach
class ObjWithPrivacyC {
    constructor(id, name, secretCode) {
        // Private properties and methods are define here
        const publicId = id;
        let objPriority = 0;
        
        // Public properties and methods that are related to private
        // should be defined here
        this.name = name;
        this.getId = () => publicId;
        this.getPrivateId = (code) => code === secretCode ? publicId + name : "********";
        this.setPriority = (priority) => (objPriority = priority);
        this.getPriority = () => (objPriority);
        this.increasePriority = () => ++objPriority;
        this.decreasePriority = () => --objPriority;
    }
}


/* ========================================================================== */
module.exports = {
    ObjWithPrivacy,
    ObjWithPrivacyC
};
/* ========================================================================== */