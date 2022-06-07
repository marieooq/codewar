// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  const regex = /T/g;
  return dna.replaceAll("T", "U");
  // let result = "";

  // for (let i = 0; i < dna.length; i++) {
  //   if (dna[i] === "T") {
  //     result += "U";
  //   } else {
  //     result += dna[i];
  //   }
  // }

  // return result;
}

console.log(DNAtoRNA("TCAT"));
