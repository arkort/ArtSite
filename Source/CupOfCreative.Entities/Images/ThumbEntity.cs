using System;
using System.Collections.Generic;
using System.Text;

namespace CupOfCreative.Entities.Images
{
    public class ThumbEntity
    {
        public Guid Id { get; private set; }
        public int UIColumn { get; private set; }

        public ThumbEntity(Guid id, int uiColumn)
        {
            Id = id;
            UIColumn = uiColumn;
        }
    }
}
