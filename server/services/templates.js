function getTemplate(type, data) {
  switch (type) {
    case "entry-earned":
      return {
        subject: "You've Earned Entries!",
        html: `
          <h2>Congrats!</h2>
          <p>You earned <strong>${data.entries}</strong> entries.</p>
          <a href="#">Unsubscribe</a>
        `,
      };
    case "qualified":
      return {
        subject: "You're Qualified!",
        html: `
          <h2>Qualification Success</h2>
          <p>You have qualified for <strong>${data.task}</strong>.</p>
          <a href="#">Unsubscribe</a>
        `,
      };
    case "draw-result":
      return {
        subject: "Draw Result",
        html: `
          <h2>Draw Result</h2>
          <p>You <strong>${data.result}</strong> the prize draw!</p>
          <a href="#">Unsubscribe</a>
        `,
      };
    default:
      return null;
  }
}

module.exports = getTemplate;
