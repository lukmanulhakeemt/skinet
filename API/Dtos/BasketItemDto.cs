using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string ProductName { get; set; } 
        [Required]
        public string PictureUrl { get; set; }
        [Required]
        [Range(.1,double.MaxValue,ErrorMessage="Price must be gretaer than zero")]
        public decimal Price { get; set; }
        [Required]
        [Range(1,double.MaxValue,ErrorMessage ="Price must be at least 1")]
        public int Quantity { get; set; }
        [Required]
        public string Brand { get; set; }   
        [Required]
        public string Type { get; set; }

    }
}