<div class="page">
<div class="thumbsup"></div>
<div class="notquite"></div>
<div class="quiz-content">
	<h2><%= category %></h2>
        <% if (img) { %>
        	<% var imgSrc = "assets/img/" + img; %>
        	<img src=<%=imgSrc%>>
        <% } %>
        <p><%= question %></p>
        <% var i = 0; %>
        <form id="choiceForm">
        <% _.each(choices, function(choice) { %>
            <div>
                <input type="radio" name="choice" class="radio" value="<%=i%>" id="choice_<%=i%>">
                <label for="choice_<%=i%>"><%=choice%></label>
            </div>
            <% i++; %>
            <% }); %>

        </form>
            <div>
                <br />
                <button id="sendAnswer" class="btn">Send Answer</button>
            </div>
    <!--
        <div>
            <input type="radio" name="choice" class="radio" value="Foo" id="foo">
            <label for="foo">Foo</label>
        </div>
        <div>
            <input type="radio" name="choice" class="radio" value="Qux" id="qux">
            <label for="qux">Qux</label>
        </div>
        </form>-->
</div>
</div>
