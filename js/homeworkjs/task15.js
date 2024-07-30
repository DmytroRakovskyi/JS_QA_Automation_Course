
const { v4: uuidv4 } = require('uuid');

class RoboDog {
  constructor(name, intelligence, aggression, strength, endurance, commands, uuid) {
    this.name = name;
    this.intelligence = intelligence;
    this.aggression = aggression;
    this.strength = strength;
    this.endurance = endurance;
    this.commands = commands;
    this.uuid = uuid;
  }

  attackEnemy() {
    const successRate = (this.intelligence + this.aggression + this.strength + this.endurance) / 4;
    const isSuccess = Math.random() * 10 < successRate;
    if (isSuccess) {
      console.log(`${this.name} успішно атакував ворога!`);
    } else {
      console.log(`${this.name} не зміг атакувати ворога.`);
    }
  }
}

class RoboDogBuilder {
  constructor(name) {
    this.name = name;
    this.intelligence = 0;
    this.aggression = 0;
    this.strength = 0;
    this.endurance = 0;
    this.commands = {};
    this.uuid = null;
  }

  setIntelligence(value) {
    this.intelligence = value;
    return this;
  }

  setAggression(value) {
    this.aggression = value;
    return this;
  }

  setStrength(value) {
    this.strength = value;
    return this;
  }

  setEndurance(value) {
    this.endurance = value;
    return this;
  }

  addCommand(name, func) {
    this.commands[name] = func;
    return this;
  }

  validate() {
    const totalPoints = this.intelligence + this.aggression + this.strength + this.endurance;
    
    if (totalPoints !== 30) {
      throw new Error(`Треба рівно 30 балів, а у вас ${totalPoints}.`);
    }

    if (this.intelligence < 0 || this.intelligence > 10 ||
        this.aggression < 0 || this.aggression > 10 ||
        this.strength < 0 || this.strength > 10 ||
        this.endurance < 0 || this.endurance > 10) {
      throw new Error(`Значення характеристик мають бути від 0 до 10.`);
    }

    this.uuid = uuidv4();
    return this;
  }

  build() {
    if (!this.uuid) {
      throw new Error('UUID не присвоєно. Спочатку валідуйте білдер.');
    }

    const roboDog = new RoboDog(
      this.name,
      this.intelligence,
      this.aggression,
      this.strength,
      this.endurance,
      this.commands,
      this.uuid
    );

    return new Proxy(roboDog, {
      get(target, prop) {
        if (prop in target.commands) {
          return target.commands[prop];
        }
        return target[prop];
      }
    });
  }
}

module.exports = RoboDogBuilder;

//Приклад використання далі

const RoboDogBuilder = require('./RoboDogBuilder');

const alf = new RoboDogBuilder('Alf')
  .setIntelligence(10)
  .setAggression(5)
  .setStrength(5)
  .setEndurance(10)
  .addCommand('bark', () => console.log('Alf гавкає'))
  .validate()
  .build();

alf.bark(); 
alf.attackEnemy(); 
