const http = require("http");

http
  .createServer((req, res) => {
      //* Cliente (req) => "Quero os produtos"
      //! Servidor <=(req) "Quero os produtos"
      //! Servidor =>(res) "Aqui estão os produtos"
      //* Cliente (res)<= "Aqui estão os produtos"
    //    http
    //         header
    //             autenticção
    //             tipo texto que tem no body
    //             chache
    //         body
    //             variaveis
    //             código html, css ...
    //             arquivos
  
        res.writeHead(200, {
          "Content-Type": "text/plain; charset=utf8",
        });
        if (req.url === "/picles") return res.end("picles");
        if (req.url === "/pepinos") return res.end("pepinos");
        if (req.url === "/pessego") return res.end("pêssego");
        if (req.url === "/banana") return res.end("banana");
        if (req.url === "/") return res.end("Vazio");
        return res.end("Não identificado");
      })
      .listen(3030, "localhost");
    