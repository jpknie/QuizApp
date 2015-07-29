<div class="quiz-title">
                <h2><%= category %></h2>
</div>
<div class="quiz-content">
        <p><%= question %></p>
        <div class="radio">
                <% _.each(choices, function(choice) { %>
                        <label><input type="radio" name="">Option 1</label>
                <% }); %>
        </div>
        <button id="sendAnswer" class="btn">Send Answer</button>
</div>
