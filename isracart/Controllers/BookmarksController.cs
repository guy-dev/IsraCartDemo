using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IsraCart.Data.ViewModels;
using IsraCart.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IsraCart.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BookmarksController : ControllerBase
	{
		private const string c_Bookmarks = "Bookmarks";

		/// <summary>
		/// Adding new repository bookmarked to session
		/// </summary>
		/// <param name="repository">repository</param>
		/// <returns></returns>
		[HttpPost("[action]")]
		public IActionResult AddBookmark([FromBody]Repository repository)
		{
			if (repository == null)
				return BadRequest();
			List<Repository> repositores = new List<Repository>();
			var bookmarkRepositories = HttpContext.Session.Get(c_Bookmarks);
			if (bookmarkRepositories != null)
			{
				repositores = Converter.Instance().ByteArrayToObject(bookmarkRepositories) as List<Repository>;
				if (repositores != null && !repositores.Contains(repository))
				{
					repositores.Add(repository);
				}
				else
				{
					return BadRequest("Bookmark Already Exists.");
				}
			}
			else
			{
				 repositores = new List<Repository>();
				repositores.Add(repository);
			}
			HttpContext.Session.Set(c_Bookmarks, Converter.Instance().ObjectToByteArray(repositores));
			return Ok();
		}

		/// <summary>
		/// Fetching all bookmarks
		/// </summary>
		/// <returns></returns>
		[HttpGet("[action]")]
		public List<Repository> GetBookmarkedRepositories()
		{
			List<Repository> bookmarkedRepositories = new List<Repository>();
			var bookmarkRepositories = HttpContext.Session.Get(c_Bookmarks);
			if (bookmarkRepositories != null)
			{
				bookmarkedRepositories = Converter.Instance().ByteArrayToObject(bookmarkRepositories) as List<Repository>;
			}
			return bookmarkedRepositories;
		}

	}
}