<div class="thumbsup"></div>
<div class="notquite"></div>
<section class="quiz-content">
	<h2><%= category %></h2>
        <div style="margin:auto; width:100%;">
        <% if (img) { %>
        	<% var imgSrc = "assets/img/" + img; %>
        	<img src=<%=imgSrc%>>
        <% } %>
        <p><%= question %></p>
        <form id="choiceForm">
        	<dl>
        		<div class="radio">
        		<% var i = 0; %>
                <% _.each(choices, function(choice) { %>
                	<dt>
                		<input type=radio name=group value=<%=i%>>
                        <label for=<%=i%>><%=choice%></label>
                	</dt>
                        <% i++; %>
                <% }); %>
           		<br />
           		</div>
	    	</dl>
        </form>
  		<button id="sendAnswer" class="btn">Send Answer</button>
    	</div>
</section>