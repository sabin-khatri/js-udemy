document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const lineWidthInput = document.getElementById('lineWidth');
    const lineWidthValueSpan = document.getElementById('lineWidthValue');
    const clearBtn = document.getElementById('clearBtn');
    const penBtn = document.getElementById('penBtn');
    const eraserBtn = document.getElementById('eraserBtn');
    const toolbar = document.querySelector('.toolbar'); // Get toolbar element

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentTool = 'pen'; // 'pen' or 'eraser'
    let currentColor = colorPicker.value;
    let currentLineWidth = lineWidthInput.value;

    // --- Canvas Setup ---
    function resizeCanvas() {
        // Make canvas size responsive, considering toolbar height and padding
        const toolbarHeight = toolbar.offsetHeight;
        const padding = 40; // Body padding * 2
        const availableHeight = window.innerHeight - toolbarHeight - padding - 20; // Extra margin
        const availableWidth = window.innerWidth - padding;

        // Set a max width if desired
        const maxWidth = 800;
        const maxHeight = 600;

        canvas.width = Math.min(availableWidth, maxWidth);
        canvas.height = Math.min(availableHeight, maxHeight);

        // Re-apply drawing settings after resize (important!)
        ctx.strokeStyle = (currentTool === 'pen') ? currentColor : '#FFFFFF'; // Eraser color is background
        ctx.lineWidth = currentLineWidth;
        ctx.lineCap = 'round'; // Makes lines smoother
        ctx.lineJoin = 'round'; // Makes joins smoother
    }

    // Initial setup and resize listener
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);


    // --- Drawing Logic ---
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = getMousePos(canvas, e);
        // Optional: Draw a dot on click
        // draw(e);
    }

    function draw(e) {
        if (!isDrawing) return; // Stop if mouse is not down

        const [currentX, currentY] = getMousePos(canvas, e);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        [lastX, lastY] = [currentX, currentY];
    }

    function stopDrawing() {
        if (!isDrawing) return;
        isDrawing = false;
        ctx.beginPath(); // Reset path to prevent connecting future lines
    }

    // Helper to get correct mouse coordinates relative to the canvas
    function getMousePos(canvasDom, event) {
        const rect = canvasDom.getBoundingClientRect();
        // Handle both mouse and touch events
        const clientX = event.clientX || event.touches[0].clientX;
        const clientY = event.clientY || event.touches[0].clientY;
        return [
            clientX - rect.left,
            clientY - rect.top
        ];
    }

    // --- Event Listeners ---

    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing); 


    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        startDrawing(e.touches[0]);
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault(); 
        draw(e.touches[0]);
    }, { passive: false });

    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);


    // Toolbar Controls
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
        if (currentTool === 'pen') {
            ctx.strokeStyle = currentColor;
        }
    });

    lineWidthInput.addEventListener('input', (e) => {
        currentLineWidth = e.target.value;
        lineWidthValueSpan.textContent = currentLineWidth;
        ctx.lineWidth = currentLineWidth;
    });

    clearBtn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    });

    penBtn.addEventListener('click', () => {
        currentTool = 'pen';
        ctx.strokeStyle = currentColor; 
        penBtn.classList.add('active');
        eraserBtn.classList.remove('active');
    });

    eraserBtn.addEventListener('click', () => {
        currentTool = 'eraser';
        ctx.strokeStyle = '#FFFFFF'; 
        eraserBtn.classList.add('active');
        penBtn.classList.remove('active');
    });

    // --- Initial Settings Apply ---
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentLineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    lineWidthValueSpan.textContent = currentLineWidth;
    penBtn.classList.add('active'); 

});