html:
<button>
  <div class="content vertical">
    <div class="text">content 1</div>
    <div class="hover-text">content 2</div>
  </div>
</button>

<button>
  <div class="content horizontal">
    <div class="text arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor"></path>
      </svg>
    </div>
    <div class="hover-text arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
</button>





Css:
.content {
  position: relative;
  overflow: hidden;
  font-size: 14px;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text,
.hover-text {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.vertical .text,
.vertical .hover-text {
  transform: translateY(0%);
}

.horizontal .text,
.horizontal .hover-text {
  transform: translateX(0%);
}

.hover-text {
  position: absolute;
}

.vertical .hover-text {
  bottom: -100%;
}

.horizontal .hover-text {
  left: -100%;
  bottom: 0%;
  top: 0%;
  right: auto;
}

button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}

button:hover .horizontal .hover-text,
button:hover .horizontal .text {
  transform: translateX(100%);
}

button {
  padding: 8px 16px;
  border: solid 1px;
  background: transparent;
}
