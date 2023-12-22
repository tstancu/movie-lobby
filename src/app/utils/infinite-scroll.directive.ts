import { Directive, Output, EventEmitter, HostListener, OnInit, Input } from '@angular/core';


@Directive({
    selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
    @Output() scrolled = new EventEmitter<void>();

    @Input() threshold = 120;

    @HostListener('window: scroll', ['$event.target'])
    onScroll() {
        console.log('scroll scroll');
        if (this.isScrollNearBottom()) {
            
            this.scrolled.emit();
        }
    }

    private isScrollNearBottom(): boolean {
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.body.scrollHeight;
        const scrollPercentage = (scrollPosition / documentHeight) * 100;
        return scrollPercentage > 120;
    }
}