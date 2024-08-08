"use strict";
// syntax = "proto3";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePetResponse = exports.DeletePetRequest = exports.ListPetsResponse = exports.ListPetsRequest = exports.PutPetResponse = exports.PutPetRequest = exports.GetPetResponse = exports.GetPetRequest = exports.Pet = exports.PetType = void 0;
var protobuf_1 = require("@bufbuild/protobuf");
var datetime_pb_js_1 = require("../../google/type/datetime_pb.js");
/**
 * PetType represents the different types of pets in the pet store.
 *
 * @generated from enum pet.v1.PetType
 */
var PetType;
(function (PetType) {
    /**
     * @generated from enum value: PET_TYPE_UNSPECIFIED = 0;
     */
    PetType[PetType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: PET_TYPE_CAT = 1;
     */
    PetType[PetType["CAT"] = 1] = "CAT";
    /**
     * @generated from enum value: PET_TYPE_DOG = 2;
     */
    PetType[PetType["DOG"] = 2] = "DOG";
    /**
     * @generated from enum value: PET_TYPE_SNAKE = 3;
     */
    PetType[PetType["SNAKE"] = 3] = "SNAKE";
    /**
     * @generated from enum value: PET_TYPE_HAMSTER = 4;
     */
    PetType[PetType["HAMSTER"] = 4] = "HAMSTER";
})(PetType || (exports.PetType = PetType = {}));
// Retrieve enum metadata with: proto3.getEnumType(PetType)
protobuf_1.proto3.util.setEnumType(PetType, "pet.v1.PetType", [
    { no: 0, name: "PET_TYPE_UNSPECIFIED" },
    { no: 1, name: "PET_TYPE_CAT" },
    { no: 2, name: "PET_TYPE_DOG" },
    { no: 3, name: "PET_TYPE_SNAKE" },
    { no: 4, name: "PET_TYPE_HAMSTER" },
]);
/**
 * Pet represents a pet in the pet store.
 *
 * @generated from message pet.v1.Pet
 */
var Pet = /** @class */ (function (_super) {
    __extends(Pet, _super);
    function Pet(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: pet.v1.PetType pet_type = 1;
         */
        _this.petType = PetType.UNSPECIFIED;
        /**
         * @generated from field: string pet_id = 2;
         */
        _this.petId = "";
        /**
         * @generated from field: string name = 3;
         */
        _this.name = "";
        /**
         * @generated from field: string age = 4;
         */
        _this.age = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    Pet.fromBinary = function (bytes, options) {
        return new Pet().fromBinary(bytes, options);
    };
    Pet.fromJson = function (jsonValue, options) {
        return new Pet().fromJson(jsonValue, options);
    };
    Pet.fromJsonString = function (jsonString, options) {
        return new Pet().fromJsonString(jsonString, options);
    };
    Pet.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(Pet, a, b);
    };
    Pet.runtime = protobuf_1.proto3;
    Pet.typeName = "pet.v1.Pet";
    Pet.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pet_type", kind: "enum", T: protobuf_1.proto3.getEnumType(PetType) },
        { no: 2, name: "pet_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 4, name: "age", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 5, name: "created_at", kind: "message", T: datetime_pb_js_1.DateTime },
        { no: 6, name: "updated_at", kind: "message", T: datetime_pb_js_1.DateTime },
    ]; });
    return Pet;
}(protobuf_1.Message));
exports.Pet = Pet;
/**
 * @generated from message pet.v1.GetPetRequest
 */
var GetPetRequest = /** @class */ (function (_super) {
    __extends(GetPetRequest, _super);
    function GetPetRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string pet_id = 1;
         */
        _this.petId = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    GetPetRequest.fromBinary = function (bytes, options) {
        return new GetPetRequest().fromBinary(bytes, options);
    };
    GetPetRequest.fromJson = function (jsonValue, options) {
        return new GetPetRequest().fromJson(jsonValue, options);
    };
    GetPetRequest.fromJsonString = function (jsonString, options) {
        return new GetPetRequest().fromJsonString(jsonString, options);
    };
    GetPetRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(GetPetRequest, a, b);
    };
    GetPetRequest.runtime = protobuf_1.proto3;
    GetPetRequest.typeName = "pet.v1.GetPetRequest";
    GetPetRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pet_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return GetPetRequest;
}(protobuf_1.Message));
exports.GetPetRequest = GetPetRequest;
/**
 * @generated from message pet.v1.GetPetResponse
 */
var GetPetResponse = /** @class */ (function (_super) {
    __extends(GetPetResponse, _super);
    function GetPetResponse(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    GetPetResponse.fromBinary = function (bytes, options) {
        return new GetPetResponse().fromBinary(bytes, options);
    };
    GetPetResponse.fromJson = function (jsonValue, options) {
        return new GetPetResponse().fromJson(jsonValue, options);
    };
    GetPetResponse.fromJsonString = function (jsonString, options) {
        return new GetPetResponse().fromJsonString(jsonString, options);
    };
    GetPetResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(GetPetResponse, a, b);
    };
    GetPetResponse.runtime = protobuf_1.proto3;
    GetPetResponse.typeName = "pet.v1.GetPetResponse";
    GetPetResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pet", kind: "message", T: Pet },
    ]; });
    return GetPetResponse;
}(protobuf_1.Message));
exports.GetPetResponse = GetPetResponse;
/**
 * @generated from message pet.v1.PutPetRequest
 */
var PutPetRequest = /** @class */ (function (_super) {
    __extends(PutPetRequest, _super);
    function PutPetRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * Re-added PetType field
         *
         * @generated from field: pet.v1.PetType pet_type = 1;
         */
        _this.petType = PetType.UNSPECIFIED;
        /**
         * Updated to include pet name
         *
         * @generated from field: string name = 2;
         */
        _this.name = "";
        /**
         * @generated from field: string age = 3;
         */
        _this.age = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    PutPetRequest.fromBinary = function (bytes, options) {
        return new PutPetRequest().fromBinary(bytes, options);
    };
    PutPetRequest.fromJson = function (jsonValue, options) {
        return new PutPetRequest().fromJson(jsonValue, options);
    };
    PutPetRequest.fromJsonString = function (jsonString, options) {
        return new PutPetRequest().fromJsonString(jsonString, options);
    };
    PutPetRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(PutPetRequest, a, b);
    };
    PutPetRequest.runtime = protobuf_1.proto3;
    PutPetRequest.typeName = "pet.v1.PutPetRequest";
    PutPetRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pet_type", kind: "enum", T: protobuf_1.proto3.getEnumType(PetType) },
        { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "age", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return PutPetRequest;
}(protobuf_1.Message));
exports.PutPetRequest = PutPetRequest;
/**
 * @generated from message pet.v1.PutPetResponse
 */
var PutPetResponse = /** @class */ (function (_super) {
    __extends(PutPetResponse, _super);
    function PutPetResponse(data) {
        var _this = _super.call(this) || this;
        /**
         * Updated to return a Pet object
         *
         * @generated from field: pet.v1.PetType pet_type = 1;
         */
        _this.petType = PetType.UNSPECIFIED;
        /**
         * @generated from field: string name = 2;
         */
        _this.name = "";
        /**
         * @generated from field: string age = 3;
         */
        _this.age = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    PutPetResponse.fromBinary = function (bytes, options) {
        return new PutPetResponse().fromBinary(bytes, options);
    };
    PutPetResponse.fromJson = function (jsonValue, options) {
        return new PutPetResponse().fromJson(jsonValue, options);
    };
    PutPetResponse.fromJsonString = function (jsonString, options) {
        return new PutPetResponse().fromJsonString(jsonString, options);
    };
    PutPetResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(PutPetResponse, a, b);
    };
    PutPetResponse.runtime = protobuf_1.proto3;
    PutPetResponse.typeName = "pet.v1.PutPetResponse";
    PutPetResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pet_type", kind: "enum", T: protobuf_1.proto3.getEnumType(PetType) },
        { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
        { no: 3, name: "age", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return PutPetResponse;
}(protobuf_1.Message));
exports.PutPetResponse = PutPetResponse;
/**
 * @generated from message pet.v1.ListPetsRequest
 */
var ListPetsRequest = /** @class */ (function (_super) {
    __extends(ListPetsRequest, _super);
    function ListPetsRequest(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    ListPetsRequest.fromBinary = function (bytes, options) {
        return new ListPetsRequest().fromBinary(bytes, options);
    };
    ListPetsRequest.fromJson = function (jsonValue, options) {
        return new ListPetsRequest().fromJson(jsonValue, options);
    };
    ListPetsRequest.fromJsonString = function (jsonString, options) {
        return new ListPetsRequest().fromJsonString(jsonString, options);
    };
    ListPetsRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(ListPetsRequest, a, b);
    };
    ListPetsRequest.runtime = protobuf_1.proto3;
    ListPetsRequest.typeName = "pet.v1.ListPetsRequest";
    ListPetsRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return []; });
    return ListPetsRequest;
}(protobuf_1.Message));
exports.ListPetsRequest = ListPetsRequest;
/**
 * @generated from message pet.v1.ListPetsResponse
 */
var ListPetsResponse = /** @class */ (function (_super) {
    __extends(ListPetsResponse, _super);
    function ListPetsResponse(data) {
        var _this = _super.call(this) || this;
        /**
         * List of pets
         *
         * @generated from field: repeated pet.v1.Pet pets = 1;
         */
        _this.pets = [];
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    ListPetsResponse.fromBinary = function (bytes, options) {
        return new ListPetsResponse().fromBinary(bytes, options);
    };
    ListPetsResponse.fromJson = function (jsonValue, options) {
        return new ListPetsResponse().fromJson(jsonValue, options);
    };
    ListPetsResponse.fromJsonString = function (jsonString, options) {
        return new ListPetsResponse().fromJsonString(jsonString, options);
    };
    ListPetsResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(ListPetsResponse, a, b);
    };
    ListPetsResponse.runtime = protobuf_1.proto3;
    ListPetsResponse.typeName = "pet.v1.ListPetsResponse";
    ListPetsResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pets", kind: "message", T: Pet, repeated: true },
    ]; });
    return ListPetsResponse;
}(protobuf_1.Message));
exports.ListPetsResponse = ListPetsResponse;
/**
 * @generated from message pet.v1.DeletePetRequest
 */
var DeletePetRequest = /** @class */ (function (_super) {
    __extends(DeletePetRequest, _super);
    function DeletePetRequest(data) {
        var _this = _super.call(this) || this;
        /**
         * @generated from field: string pet_id = 1;
         */
        _this.petId = "";
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    DeletePetRequest.fromBinary = function (bytes, options) {
        return new DeletePetRequest().fromBinary(bytes, options);
    };
    DeletePetRequest.fromJson = function (jsonValue, options) {
        return new DeletePetRequest().fromJson(jsonValue, options);
    };
    DeletePetRequest.fromJsonString = function (jsonString, options) {
        return new DeletePetRequest().fromJsonString(jsonString, options);
    };
    DeletePetRequest.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(DeletePetRequest, a, b);
    };
    DeletePetRequest.runtime = protobuf_1.proto3;
    DeletePetRequest.typeName = "pet.v1.DeletePetRequest";
    DeletePetRequest.fields = protobuf_1.proto3.util.newFieldList(function () { return [
        { no: 1, name: "pet_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    ]; });
    return DeletePetRequest;
}(protobuf_1.Message));
exports.DeletePetRequest = DeletePetRequest;
/**
 * @generated from message pet.v1.DeletePetResponse
 */
var DeletePetResponse = /** @class */ (function (_super) {
    __extends(DeletePetResponse, _super);
    function DeletePetResponse(data) {
        var _this = _super.call(this) || this;
        protobuf_1.proto3.util.initPartial(data, _this);
        return _this;
    }
    DeletePetResponse.fromBinary = function (bytes, options) {
        return new DeletePetResponse().fromBinary(bytes, options);
    };
    DeletePetResponse.fromJson = function (jsonValue, options) {
        return new DeletePetResponse().fromJson(jsonValue, options);
    };
    DeletePetResponse.fromJsonString = function (jsonString, options) {
        return new DeletePetResponse().fromJsonString(jsonString, options);
    };
    DeletePetResponse.equals = function (a, b) {
        return protobuf_1.proto3.util.equals(DeletePetResponse, a, b);
    };
    DeletePetResponse.runtime = protobuf_1.proto3;
    DeletePetResponse.typeName = "pet.v1.DeletePetResponse";
    DeletePetResponse.fields = protobuf_1.proto3.util.newFieldList(function () { return []; });
    return DeletePetResponse;
}(protobuf_1.Message));
exports.DeletePetResponse = DeletePetResponse;
