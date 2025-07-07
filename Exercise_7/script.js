class Password {
  randomGenerator = async (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  charPosition = async () => {
    let charPosition = await randomGenerator(0, digits);
    // console.log(charPosition)
    return charPosition;
  };

  generateUpperCase = async () => {
    let char = await randomGenerator(65, 91);
    // console.log(char)
    return char;
  };

  generateLowerCase = async () => {
    let Char = await randomGenerator(65, 91);
    return Char;
  };

  generateNumbers = async () => {
    return await randomGenerator(48, 58);
  };
  createWeakPwd = () => {
    let digits = 8;
    let pwd = Array(8).fill(undefined);

    const generateSpecialChar = async () => {
      const ranges = [
        [33, 48],
        [58, 65],
        [91, 97],
        [123, 127],
      ];
      let range = ranges[await randomGenerator(0, 4)];
      return await randomGenerator(range[0], range[1]);
    };

    const setUpperCase = async () => {
      let position = await charPosition();
      if (!pwd.includes(undefined)) {
        return;
      }
      if (pwd[position] == undefined) {
        pwd[position] = String.fromCharCode(await generateUpperCase());
      } else {
        await setUpperCase();
      }
    };
    const setLowerCase = async () => {
      let position = await charPosition();
      if (!pwd.includes(undefined)) {
        return;
      }
      if (pwd[position] == undefined) {
        pwd[position] = String.fromCharCode(await generateLowerCase());
      } else {
        await setLowerCase();
      }
    };

    const setNumbers = async () => {
      let position = await charPosition();
      if (!pwd.includes(undefined)) {
        return;
      }
      if (pwd[position] == undefined) {
        pwd[position] = String.fromCharCode(await generateNumbers());
      } else {
        await setNumbers();
      }
    };

    const setSpecialChar = async () => {
      let position = await charPosition();
      if (!pwd.includes(undefined)) {
        return;
      }
      if (pwd[position] == undefined) {
        pwd[position] = String.fromCharCode(await generateSpecialChar());
      } else {
        setSpecialChar();
      }
    };
    const buildWeakPwd = async () => {
      await setUpperCase();
      await setUpperCase();
      await setLowerCase();
      await setLowerCase();
      await setNumbers();
      await setNumbers();
      while (pwd.includes(undefined)) {
        await setSpecialChar();
      }
    };
    return pwd.join("")
    };
  getStrongPassword() {
    return createSuperStrongPwd();
  }
  getMidPassword() {
    return createStrongPwd();
  }
  getWeakPassword() {
    return await createWeakPwd()
  }
  getFunnyPassword() {
    return createFunnyPwd();
  }
}
