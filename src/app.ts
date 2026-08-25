import { Server } from "./presentation/server";

//Función anónima autoinvocada
(async()=>{
    main();
})();

function main() {
    Server.start()
}