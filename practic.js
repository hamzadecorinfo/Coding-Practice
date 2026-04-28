const profileForm = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const casteInput = document.getElementById("caste");
const dobInput = document.getElementById("dob");
const message = document.getElementById("message");

function setMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
}

function getAgeFromDob(dobValue) {
    const dob = new Date(dobValue);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age -= 1;
    }

    return age;
}

profileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const caste = casteInput.value.trim();
    const dob = dobInput.value;

    if (!name || !caste || !dob) {
        setMessage("Please name, caste aur date of birth fill karein.", "error");
        return;
    }

    const age = getAgeFromDob(dob);

    if (Number.isNaN(age) || age < 0 || age > 120) {
        setMessage("Please valid date of birth enter karein.", "error");
        return;
    }

    setMessage(
        `${name}, aap ki age ${age} years hai. Caste (${caste}) se kisi insan ki shakal ya kirdar decide nahi hota, har insan izzat ke laiq hai.`,
        "success"
    );
    profileForm.reset();
});
