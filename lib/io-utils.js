"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function findReleaseFile(releaseDir) {
    console.log("CAN WE SEE THIS:", fs_1.default.readdirSync(releaseDir, { withFileTypes: true }));
    const releaseFiles = fs_1.default.readdirSync(releaseDir, { withFileTypes: true })
        .filter(item => {
        console.log("First filter:", item);
        return !item.isDirectory();
    })
        .filter(item => {
        console.log("Second filter:", item);
        return item.name.endsWith(".apk") || item.name.endsWith(".aab");
    });
    if (releaseFiles.length > 0) {
        return releaseFiles[0];
    }
}
exports.findReleaseFile = findReleaseFile;
