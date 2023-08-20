import React from 'react'

export default function GlassList({ GlassIcons, onChangeGlass }) {
    return GlassIcons.map((GlassIcon) => {
        return (
          <div key={GlassIcon.id} className="col-md-2 mb-3 text-center" onClick={()=>onChangeGlass(GlassIcon)}>
            <div
              style={{
                border: "1px solid black",
              }}
            >
              <img src={GlassIcon.url} alt="" width="100%" height="50px" />
            </div>
          </div>
        );
      });
}
