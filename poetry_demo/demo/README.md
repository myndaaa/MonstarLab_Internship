# Poetry Python Package Manager

poetry package manager uses a .toml file to track the dependencies it is going to install for a specific project. 
if we were to use an analogy, much like how different systems have a .config or .yaml or .yml file to tell the system on how to 
configure itself, poetry uses .toml
<br>
<br>

- to start a project with poetry we can use `poetry new <project name>`
- to initialize poetry on an existing project we can use `poetry init`
<br>
<br>
<br>
<br>
An empty poetry project (when created via new) creates a shell (empty) wrapper .toml file on which we can later add new
dependencies via the commands `poetry add <dependency_name>` or if its a dev dependency we can use `poetry add --dev <dependency_name>`
Furthermore once done, we can use the command `poetry install` which will initialize the poetry venv. this will also generate a
poetry lock file. This file ensures that everyone collaborating on the project, uses the same versions of the dependencies; nobody mistakenly updates a dependency and so on.
Hence "locking" everyone on the same dependency. 
<br>
<br>
the dummy project created on day 2, is a sample flask project, although havenot used flashy dependencies like CORS or others,
I have tried adding different dependencies that incorporate with flask, and have removed to see if it reflects on the project as well. Hence a
lock file must always be committed to the repo so everyone stays on the loop on which version and depencies are being used, so that
the project behaves simialrly across all developmental machines.

Comment from Tanzim bhaia: Lock file is also important so that one doesnt upgrade a certain dependency by mistake on their end.
