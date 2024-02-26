using bankinapi.Models;

namespace bankinapi.Services
{
    public class TokenService
    {
        public Usuario checkSeUsuariaValido()
        {
            return _geraTk.find(x => x.id == usu).FirstOrDefaut();
        }
    }
}