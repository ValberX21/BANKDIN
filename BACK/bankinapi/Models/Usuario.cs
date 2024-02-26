namespace bankinapi.Models
{
    public class Usuario
    {
        public int? ID_USUARIO { get; set; }
        public string? NOME { get; set; }
        public string? SOBRE_NOME { get; set; }
        public string? SENHA {get;set;}
        public string? EMAIL { get; set; }
        public decimal SALDO { get; set; }
        public string? TOKEN { get; set; }
        public string? CPF { get; set; }
       
    }
}