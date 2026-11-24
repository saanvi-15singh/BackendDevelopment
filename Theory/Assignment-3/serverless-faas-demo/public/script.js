async function processResult() {

    // Get input values

    const name =
        document
            .getElementById("name")
            .value
            .trim();

    const subject =
        document
            .getElementById("subject")
            .value
            .trim();

    const marks =
        document
            .getElementById("marks")
            .value;


    // Get page elements

    const waiting =
        document.getElementById("waiting");

    const loading =
        document.getElementById("loading");

    const resultBox =
        document.getElementById("result");


    // Validate fields

    if (!name || !subject || marks === "") {

        alert(
            "Please enter student name, subject and marks."
        );

        return;
    }


    // Show execution screen

    waiting.classList.add("hidden");

    resultBox.classList.add("hidden");

    loading.classList.remove("hidden");


    try {

        // Send HTTP Event to server

        const response =
            await fetch(
                "/api/process-result",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        name: name,

                        subject: subject,

                        marks: marks

                    })

                }
            );


        // Receive JSON response

        const data =
            await response.json();


        // Small delay for demonstration

        await new Promise(

            resolve =>

                setTimeout(
                    resolve,
                    800
                )

        );


        loading.classList.add("hidden");

        resultBox.classList.remove("hidden");


        // Error returned by function

        if (!data.success) {

            resultBox.innerHTML = `

                <div class="error-message">

                    ✕ Function Error

                </div>

                <p>
                    ${data.message}
                </p>

            `;

            return;
        }


        // PASS / FAIL class

        const statusClass =

            data.status === "PASS"

                ? "pass"

                : "fail";


        // Display response

        resultBox.innerHTML = `

            <div class="success-message">

                ✓ Serverless Function Executed

            </div>


            <div class="result-row">

                <span>
                    Student
                </span>

                <strong>
                    ${data.student}
                </strong>

            </div>


            <div class="result-row">

                <span>
                    Subject
                </span>

                <strong>
                    ${data.subject}
                </strong>

            </div>


            <div class="result-row">

                <span>
                    Marks
                </span>

                <strong>
                    ${data.marks}/100
                </strong>

            </div>


            <div class="result-row">

                <span>
                    Grade
                </span>

                <strong>
                    ${data.grade}
                </strong>

            </div>


            <div class="result-row">

                <span>
                    Status
                </span>

                <strong class="${statusClass}">

                    ${data.status}

                </strong>

            </div>


            <div class="result-row">

                <span>
                    Executed At
                </span>

                <strong>
                    ${data.executedAt}
                </strong>

            </div>


            <p class="event-result">

                ⚡ HTTP Event
                →
                λ Function
                →
                JSON Response

            </p>

        `;

    }

    catch (error) {

        console.error(error);


        loading.classList.add("hidden");

        resultBox.classList.remove("hidden");


        resultBox.innerHTML = `

            <div class="error-message">

                ✕ Connection Error

            </div>

            <p>
                Unable to execute the function.
            </p>

            <p>
                Make sure server.js is running.
            </p>

        `;

    }

}