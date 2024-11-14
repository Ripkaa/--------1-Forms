document.addEventListener("DOMContentLoaded", () => {
    const confirmButton = document.getElementById("confirmButton");
    const textField = document.getElementById("textField");
    const checkBox = document.getElementById("checkBox");
    const disableButton = document.getElementById("disableButton");
    const enableButton = document.getElementById("enableButton");
    const mainForm = document.getElementById("mainForm");

    confirmButton.addEventListener("click", () => {
        if (confirm("Вы уверены, что хотите продолжить?")) {
            textField.value = "Действие подтверждено!";
            checkBox.checked = true;
        } else {
            mainForm.reset();
        }
    });

    disableButton.addEventListener("click", () => {
        textField.disabled = true;
    });

    enableButton.addEventListener("click", () => {
        textField.disabled = false;
    });

    const hoverableFields = document.querySelectorAll(".hoverable");
    hoverableFields.forEach(field => {
        field.addEventListener("mouseenter", () => {
            field.focus();
            field.value = `ID: ${field.id}`;
        });

        field.addEventListener("mouseleave", () => {
            field.blur();
            field.value = "";
        });
    });

    const toggleCheckboxes = document.querySelectorAll(".toggleCheckbox");
    toggleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", (event) => {
            const textField = event.target.nextElementSibling;
            textField.style.display = checkbox.checked ? "inline" : "none";
        });
    });
});
