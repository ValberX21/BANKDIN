using bankinapi.Models;
using bankinapi.Models.Dto;
using bankinapi.Repository;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace bankinapi.GenerateTokenController
{
    [Route("[controller]")]
    [ApiController]
    public class CadUsuarioController : ControllerBase
    {
        protected ResponseDto _response;
        private readonly IConfiguration _configuration;
        private CadastroUsuarioRepository _cadUsuario;

        public CadUsuarioController(CadastroUsuarioRepository cadUsuario, IConfiguration configuration)
        {
            _cadUsuario = cadUsuario;
            this._response = new ResponseDto();
            _configuration = configuration;
        }

        [HttpPost]
        [Route("adicionaNovoUsuario")]
        public async Task<object> PostAsync([FromBody] Usuario usu)
        {
            try
            {
                bool usuarioCadatrado = await _cadUsuario.inseriNovoUsuario(usu);

                if (usuarioCadatrado)
                {
                    var jsonObject = new
                    {
                        success = true,
                        message = "Usuário cadastrado com sucesso!"
                    };
                    return jsonObject;
                }
                else
                {
                    var jsonObject = new
                    {
                        success = false,
                        message = "Erro ao cadastrar usuário"
                    };
                    return jsonObject;
                }
            }
            catch (Exception ex)
            {
                var jsonObject = new
                {
                    success = false,
                    message = "ERRO AO CADASTRAR USUARIO - " + ex.Message
                };
                return jsonObject;
            }
        }
    }    
}
