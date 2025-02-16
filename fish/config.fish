if status is-interactive
    set -g -x fish_greeting '
              _                          
__      _____| | ___ ___  _ __ ___   ___ 
\ \ /\ / / _ \ |/ __/ _ \| `_ ` _ \ / _ \
 \ V  V /  __/ | (_| (_) | | | | | |  __/
  \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
'                                                    

    alias neofetch="neofetch --ascii_distro arcolinux"
    alias emacs="emacs -nw"
    alias e="emacs -nw"
# Commands to run in interactive sessions can go here
end

starship init fish | source
