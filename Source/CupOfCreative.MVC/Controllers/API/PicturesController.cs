using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using CupOfCreative.Entities.Images;
using CupOfCreative.DataAccess;

namespace ArtSite.Controllers.API
{
    [Produces("application/json")]
    public class PicturesController : Controller
    {
        private DatabaseProvider _databaseProvider = new DatabaseProvider();

        [HttpGet]
        [Route("api/thumbs/")]
        public IEnumerable<ThumbEntity> GetPictureThumbs()
        {
            return _databaseProvider.GetThumbList();
        }

        //[HttpGet]
        //[Route("api/thumbs/{id}")]
        //public IActionResult GetThumb(string id)
        //{
        //    var image = System.IO.File.OpenRead(Path.Combine(_thumbsPath, id + ".jpg"));
        //    return File(image, "image/jpeg");
        //}

        //[HttpGet]
        //[Route("api/pictures/{id}")]
        //public IActionResult GetPicture(string id)
        //{
        //    var image = System.IO.File.OpenRead(Path.Combine(_picturesPath, id + ".jpg"));
        //    return File(image, "image/jpeg");
        //}
    }
}
