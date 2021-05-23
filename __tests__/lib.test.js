const {
  generateResult,
  validateInput,
  checkAndGenerate,
} = require("../js/lib");

// test("title", callback)
// unit test for generateResult()
test("testing generate result function", () => {
  expect(generateResult("1", "This is a test")).toBe(
    "User ID: 1 created an article titled This is a test"
  );
});

// unit test for validateInput()
test("testing validateInput function", () => {
  expect(validateInput(1, true, true)).toBeTruthy();
});

// integration test for checkAndGenerate()
test("Testing checkAndGenerate function", () => {
  expect(checkAndGenerate(1, "Title 1", "This is a test")).toBe(
    "User ID: 1 created an article titled Title 1"
  );
});
