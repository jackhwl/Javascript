import foo from "dns"

foo.lookup("pluralsight.com", function (e, addr) {
  console.log(`Address(es): ${addr}`)
})