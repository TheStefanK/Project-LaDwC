// Score component Mixins
export const scoreMixins = {
  methods: {
    helloWorld(value) {
      return value
    },
    numberWithDot(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    // Time Formatter
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },


    // indicator Pointer
    indicatorPointer(value, multiplier) {
      switch (true) {
        case (value < multiplier):
          //console.log(multiplier);
          return "-90";

        case (value < (multiplier * 2) && value >= multiplier): {
          //console.log(multiplier * 2);
          return "-70";
        }
        case (value < (multiplier * 3) && value >= (multiplier * 2)): {
          //console.log(multiplier * 3);
          return "-50";
        }
        case (value < (multiplier * 4) && value >= (multiplier * 3)): {
          return "-30";
        }
        case (value < (multiplier * 5) && value >= (multiplier * 4)): {
          return "-10";
        }
        case (value < (multiplier * 6) && value >= (multiplier * 5)): {
          return "0";
        }
        case (value < (multiplier * 7) && value >= (multiplier * 6)): {
          return "10";

        }
        case (value < (multiplier * 8) && value >= (multiplier * 7)): {
          return "30";
        }
        case (value < (multiplier * 9) && value >= (multiplier * 8)): {
          return "50";
        }
        case (value < (multiplier * 10) && value >= (multiplier * 9)): {
          return "70";
        }
        case (value > multiplier * 10): {
          return "90";
        }
      }
    },


  }
};

