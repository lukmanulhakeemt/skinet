using System;
using System.Collections.Generic;

namespace Core.Entities.OrderAggregate
{
    public class Order : BaseEntity
    {
        public Order()
        {
        }

        public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail,  Address shipToAddress, DeliveryMethod daliveryMethod, decimal subTotal)
        {
            BuyerEmail = buyerEmail;
            
            ShipToAddress = shipToAddress;
            DaliveryMethod = daliveryMethod;
            OrderItems = orderItems;
            SubTotal = subTotal;
           
        }

        public string BuyerEmail { get; set; }
        public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
        public Address ShipToAddress { get; set; }
        public DeliveryMethod DaliveryMethod { get; set; }
        public IReadOnlyList<OrderItem> OrderItems { get; set; }
        public decimal SubTotal { get; set; }
        public OrderStatus Status { get; set; }=OrderStatus.Pending;
        public string PaymentIntentId { get; set; }
        public decimal GetTotal()
        {
            return SubTotal + new DeliveryMethod().Price;
        }
        
    }
}