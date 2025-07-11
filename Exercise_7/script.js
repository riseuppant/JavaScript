const randomGenerator = async (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const charPosition = async (digits) => {
  return await randomGenerator(0, digits);
};

const generateUpperCase = async () => {
  return await randomGenerator(65, 91);
};

const generateLowerCase = async () => {
  return await randomGenerator(97, 123);
};

const generateNumbers = async () => {
  return await randomGenerator(48, 58);
};

const createWeakPwd = async () => {
  const digits = 8;
  const pwd = Array(digits).fill(undefined);
  
  const generateSpecialChar = async () => {
    const ranges = [
      [33, 48],
      [58, 65],
      [91, 97],
      [123, 127],
    ];
    const range = ranges[await randomGenerator(0, ranges.length)];
    return await randomGenerator(range[0], range[1]);
  };
  
  const setCharacter = async (generatorFunc) => {
    if (!pwd.includes(undefined)) return;
    const position = await charPosition(digits);
    if (pwd[position] === undefined) {
      pwd[position] = String.fromCharCode(await generatorFunc());
    } else {
      await setCharacter(generatorFunc);
    }
  };
  
  const buildWeakPwd = async () => {
    await setCharacter(generateUpperCase);
    await setCharacter(generateUpperCase);
    await setCharacter(generateLowerCase);
    await setCharacter(generateLowerCase);
    await setCharacter(generateNumbers);
    await setCharacter(generateNumbers);
    while (pwd.includes(undefined)) {
      await setCharacter(generateSpecialChar);
    }
  };
  
  await buildWeakPwd();
  return pwd.join('');
};
const getWeakPassword = async () => await createWeakPwd();
const pwd = await getWeakPassword();
let genPwd = document.querySelector(".genPwd");
let container= document.getElementById("landingContainer")

genPwd.addEventListener('click', () => {
  container.style.display = "none";
  console.log("Clicked")
});
