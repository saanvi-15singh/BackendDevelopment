// Serverless-style Function as a Service (FaaS)

async function processResult(event) {

    console.log("Serverless function triggered");

    const name = event.name;
    const subject = event.subject;
    const marks = Number(event.marks);

    // Validation
    if (!name || !subject || Number.isNaN(marks)) {
        return {
            success: false,
            message: "Please enter valid student details."
        };
    }

    if (marks < 0 || marks > 100) {
        return {
            success: false,
            message: "Marks must be between 0 and 100."
        };
    }

    // Calculate grade
    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Pass / Fail
    const status = marks >= 40 ? "PASS" : "FAIL";

    // Function response
    return {
        success: true,
        message: "Function executed successfully!",
        student: name,
        subject: subject,
        marks: marks,
        grade: grade,
        status: status,
        executedAt: new Date().toLocaleString()
    };
}

module.exports = processResult;