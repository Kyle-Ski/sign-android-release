import {Dirent} from "fs";
import fs from "fs";

export function findReleaseFile(releaseDir: string): Dirent | undefined {
    console.log("CAN WE SEE THIS:", fs.readdirSync(releaseDir, {withFileTypes: true}))
    const releaseFiles = fs.readdirSync(releaseDir, {withFileTypes: true})
        .filter(item => {
            console.log("First filter:", item)
            return !item.isDirectory()
        })
        .filter(item => {
            console.log("Second filter:", item)
            return item.name.endsWith(".apk") || item.name.endsWith(".aab")
        });

    if (releaseFiles.length > 0) {
        return releaseFiles[0]
    }
}

