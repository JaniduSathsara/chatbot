function btnSend() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "__cf_bm=HuSQ5G0OLoj2Zu9lx8UgxIkcmsEFra.Stx4eQ6m92no-1795073714.2331626-1.0.1.1-mjihs3tvsUpjj.54VCtqdoqwRw.Oeaj3xcA5HYfX7eoHpdReosdOVyJaBVyTAla7nqjREO5WlBctd6QlQkjhZZsxlWOLsLJgYjRzCqA3x1b3eyHC5cfpp_1aM5W8NbuQ");

  const raw = JSON.stringify({
    "model": "openai/gpt-oss-20b",
    "input": document.getElementById("userInputText").value
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://api.groq.com/openai/v1/responses", requestOptions)
    .then((response) => response.json())
    .then((result) =>
      document.getElementById("lblDisplay").innerHTML = marked.parse(result.output[1].content[0].text)
    );
    
}

