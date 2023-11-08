class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  printNumbers() {
    Console.print("[" + this.#numbers + "]");
  }

  #ranking(winningCount, doesBonusMatch) {
    if (winningCount == 3) { return 5; }
    else if (winningCount == 4) { return 4; }
    else if (winningCount == 5 && !doesBonusMatch) { return 3; }
    else if (winningCount == 5 && doesBonusMatch) { return 2; }
    else if (winningCount == 6) { return 1;}
    else { return 0; }
  }

  confirmWinning(winningNumbers,winningBonusNumber) {
    let winningCount = 0;
    let doesBonusMatch = false;

    this.#numbers.forEach(number => {
      if (winningNumbers.includes(number)) {
        winningCount += 1;
      }
    })

    if (this.#numbers.includes(winningBonusNumber)) {
      doesBonusMatch = true;
    }

    return this.#ranking(winningCount, doesBonusMatch);
  }
}

export default Lotto;
