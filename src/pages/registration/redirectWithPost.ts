function redirectWithPost(url: string, data: { [key: string]: string }) {
    const form = document.createElement("form");

    form.method = "POST";

    form.action = url;

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const input = document.createElement("input");

            input.type = "hidden";

            input.name = key;

            input.value = data[key];

            form.appendChild(input);
        }
    }

    document.body.appendChild(form);

    form.submit();
}

export default redirectWithPost;