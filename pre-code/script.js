        function formatHTML(event) {
            event.preventDefault();
            var htmlInput = document.getElementById('htmlCode').value;
            var escapedHTML = escapeHTML(htmlInput);
            document.getElementById('formattedCode').textContent = escapedHTML;
        }

        function escapeHTML(html) {
            return html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }
