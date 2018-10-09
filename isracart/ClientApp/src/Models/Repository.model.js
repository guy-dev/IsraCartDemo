"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repository = /** @class */ (function () {
    function Repository() {
    }
    Repository.jsonToObject = function (jsonObj) {
        var result = new Repository();
        result.id = jsonObj.id;
        result.description = jsonObj.description;
        result.htmlUrl = jsonObj.html_url;
        result.name = jsonObj.name;
        result.ownerAvatalUrl = jsonObj.owner.avatar_url;
        result.ownerId = jsonObj.owner.id;
        return result;
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=Repository.model.js.map