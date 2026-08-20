import fs from "fs";
import path from "path";

export function readTestData(fileName) {
    const filePath = path.join(
        process.cwd(),
        "TestData",
        fileName
    );

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
}