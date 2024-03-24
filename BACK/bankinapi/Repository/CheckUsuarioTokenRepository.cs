using AutoMapper;
using bankinapi.DbContexts;
using bankinapi.Models;
using Microsoft.EntityFrameworkCore;

namespace bankinapi.Repository
{
    public class CheckUsuarioTokenRepository
    {
        private readonly ApplicationDbContext _db;
        private IMapper _mapper;

        public CheckUsuarioTokenRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<Usuario> SelecionaUsuarioo(Usuario usu)
        {
            Usuario product = await _db.Usuarios.Where(x => x.CPF == usu.CPF).FirstOrDefaultAsync();
            return _mapper.Map<Usuario>(product);
        }
    }
}
